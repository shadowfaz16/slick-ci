/bin/bash

docker build -t slickci-runner .
docker tag slickci-runner:latest slickci/slickci-runner:1.0.0
docker push slickci/slickci-runner:1.0.0
