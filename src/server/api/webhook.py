import requests
from flask import Flask, request

app = Flask(__name__)

def get_workflow_run_details(access_token, repository_owner, repository_name, workflow_run_id):
    headers = {
        'Authorization': f'token {access_token}',
        'Accept': 'application/vnd.github.v3+json'
    }
    url = f'https://api.github.com/repos/{repository_owner}/{repository_name}/actions/runs/{workflow_run_id}'
    response = requests.get(url, headers=headers)
    response.raise_for_status()  # Raise an exception for non-2xx responses
    return response.json()

@app.route('/webhook', methods=['POST'])
def handle_webhook():
    payload = request.json
    if payload['action'] == 'completed':
        workflow_run_id = payload['workflow_run']['id']
        repository_owner = payload['repository']['owner']['login']
        repository_name = payload['repository']['name']
        # Fetch details about the completed workflow run
        workflow_run_details = get_workflow_run_details(access_token, repository_owner, repository_name, workflow_run_id)
        print(workflow_run_details)
    return '', 204  # Respond with success status code

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)  # Run Flask app with specified host and port
