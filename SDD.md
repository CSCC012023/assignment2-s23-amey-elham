# A2 SDD

### **System Design Document**

### Introduction

The system design document describes the architecture and design of a Continuous Integration and Continuous Deployment (CI/CD) pipeline for the project "Playbook." It leverages GitAction and Docker, integrated with Google Kubernetes Engine (GKE), for automating the build, test, and deployment processes.

### CI/CD Pipeline Overview

The CI/CD pipeline consists of two main parts:

1. **Continuous Integration (CI):** Automated build and push of Docker images.
2. **Continuous Deployment (CD):** Automated deployment of containerized applications on GKE.

### CI Pipeline Design

1. **Login to Docker Hub:** Authenticate with Docker Hub using secret credentials.
2. **Check out code:** Clone the source code from the main branch.
3. **Build Docker server/client images:** Navigate to server and client directories, then build and tag the Docker images with a timestamp.
4. **Push images to Docker Hub:** Push the built server and client images to Docker Hub.

### CD Pipeline Design

1. **Login to GCP:** Authenticate with Google Cloud Platform (GCP) using a service account key.
2. **Set up Cloud SDK:** Setup Google Cloud SDK with the project ID.
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

1. **Pull the container from Docker Hub and deploy it on any containerized engine based on your preference:** Containers are pulled from Docker Hub and deployed to Google Kubernetes Engine during the deployment steps.
2. **Set up automated testing for the deployed container to ensure its functionality and performance:** While not explicitly shown in the YAML code, automated testing could be integrated as additional steps in the workflow to ensure container functionality and performance.

### Conclusion

This system design illustrates a robust CI/CD pipeline that facilitates streamlined development, continuous integration, and automated deployment. The use of GitAction, Docker, and GKE ensures an efficient, scalable, and maintainable solution.

### Submission Materials

- **Report documents:** The README provides an overview and  the SDD provides a detailed design of the workflow.
- **Files:** YAML file representing the workflow, Dockerfile for building the images, and Kubernetes deployment files.

# **Playbook CI/CD Pipeline**

## **Introduction**

The Playbook project leverages a Continuous Integration and Continuous Deployment (CI/CD) pipeline to automate build, test, and deployment processes. This README provides a brief guide on how to use the system.

## **Requirements**

- Docker
- Google Cloud SDK
- Kubernetes CLI (kubectl)
- Git

## **CI/CD Pipeline Overview**

### **CI:**

1. **Login to Docker Hub:** Authenticate with Docker Hub.
2. **Build & Push Images:** Build Docker server/client images and push them to Docker Hub.

### **CD:**

1. **Login to GCP:** Authenticate with Google Cloud Platform.
2. **Deploy to GKE:** Deploy the server and client to Google Kubernetes Engine.

## **Setup & Usage**

1. **Clone the Repository:** **`git clone <repo-url>`**
2. **Navigate to Project Directory:** **`cd <project-dir>`**
3. **Build the Images:** Run the provided build script or manually build using Docker.
4. **Deploy the Application:** Apply the Kubernetes deployment files to your GKE cluster.
5. ********************************Github Secrets:******************************** make sure to have all the correct secrets for the application that are specified in the .yml files

## **Additional Resources**

For a detailed explanation of the system's design and workflow, refer to the accompanying System Design Document. `SDD.md`