import requests
import base64
import yaml

def list_repository_contents(owner, repo, access_token, path=""):
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Accept": "application/vnd.github.v3+json"  # Specify API version
    }
    url = f"https://api.github.com/repos/{owner}/{repo}/contents/{path}"
    response = requests.get(url, headers=headers)
    response.raise_for_status()  # Raise exception for 4xx or 5xx status codes
    return response.json()

def get_yaml_file_content(owner, repo, path, access_token):
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Accept": "application/vnd.github.v3.raw"  # Retrieve raw content
    }
    url = f"https://api.github.com/repos/{owner}/{repo}/contents/{path}"
    response = requests.get(url, headers=headers)
    response.raise_for_status()  # Raise exception for 4xx or 5xx status codes
    return response.text

def find_workflow_file(owner, repo, access_token):
    contents = list_repository_contents(owner, repo, access_token, path=".github/workflows")
    for item in contents:
        if item["name"].endswith((".yml", ".yaml")):
            return item
    return None

# Read credentials from file
def read_credentials(filename):
    credentials = {}
    with open(filename, 'r') as file:
        for line in file:
            key, value = line.strip().split('=')
            credentials[key] = value
    return credentials

# Example usage
credentials = read_credentials('credentials.txt')
repo_owner = credentials.get('repo_owner')
repo_name = credentials.get('repo_name')
access_token = credentials.get('access_token')
if repo_owner and repo_name and access_token:
    try:
        workflow_file = find_workflow_file(repo_owner, repo_name, access_token)
        if workflow_file:
            yaml_content = get_yaml_file_content(repo_owner, repo_name, workflow_file["path"], access_token)
            runs = None
            try:
                yaml_data = yaml.safe_load(yaml_content)
                if yaml_data:
                    runs = yaml_data.get("jobs", {}).get("build", {}).get("runs-on")
            except yaml.YAMLError as e:
                print(f"Error parsing YAML content: {e}")

            if runs == 'slickci-runner-01':
                print(f"Runs on header {runs}")
            else:
                print(f"No 'runs-on' header found in {workflow_file['path']}")
        else:
            print("No YAML files found in the .github/workflows directory.")
    except requests.exceptions.HTTPError as e:
        print(f"HTTP error occurred: {e}")
else:
    print("Credentials not found or incomplete in credentials.txt file.")
