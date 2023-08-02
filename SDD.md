# A2 SDD

### **System Design Document**

### Introduction

Our SDD explains how we integrated a CI/CD pipeline into our application

### CI/CD Pipeline Overview

The CI/CD pipeline consists of two main parts:

1. **Continuous Integration (CI):** Automated build and push of Docker images.
2. **Continuous Deployment (CD):** Automated deployment of containers on GKE.

### CI Pipeline Design

1. **Login to Docker Hub:** Authenticate with Docker Hub using credentials (repository secrets).
2. **Check out code:** Clone the source code from the main branch.
3. **Build Docker server/client images:** Navigate to server and client directories, then build and tag the Docker images with a timestamp.
4. **Push images to Docker Hub:** Push the built server and client images to Docker Hub.

### CD Pipeline Design

1. **Login to GCP:** Authenticate with Google Cloud Platform (GCP) using a service account key(repository secrets).
2. **Set up Cloud SDK:** Setup Google Cloud SDK with the project ID(repository secrets).
3. **Configure Docker with GCP:** Authorize Docker to access GCP.
4. **Install and Setup Kubectl:** Install Kubernetes CLI and configure access to the GKE cluster.
5. **Deploy server and client to GKE:** Apply the Kubernetes deployment files for the server and client.

### Workflow Implementation Details

### **Figure 1: CI Workflow**

The CI workflow consists of the following stages:

1. **Create Dockerfile, and image for the project:** This stage involves the preparation of the Dockerfile and the creation of the image. It is executed during the "Build the Docker server image" and "Build the Docker client image" steps.
2. **Tag and push the image to a Docker registry:** During this stage, images are tagged with timestamps and pushed to Docker Hub. This is done during the steps that build and push the server and client images.
3. **Set up a CI workflow using GitAction:** The entire workflow file defines the CI process and ensures that every push or pull request to the main branch triggers the pipeline.

### **Figure 2: CD Workflow**

The CD workflow consists of the following tasks:

1. **Pull the container from Docker Hub and deploy it on any containerized engine based on your preference:** Containers are pulled from Docker Hub and deployed to Google Kubernetes Engine on GCP during the deployment steps.
2. **Set up automated testing for the deployed container to ensure its functionality and performance:** We use Jest and github actions to run a test suite for automated testing

### Conclusion

This system design illustrates a  CI/CD pipeline that facilitates streamlined development, continuous integration, and automated deployment. using of GitAction, Docker, and GKE.


