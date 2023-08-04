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

## **Access the app (EXTERNAL_IPs)**

**Frontend** - 34.139.167.10
**Backend** - 35.227.90.1

## **Additional Resources**

For a detailed explanation of the system's design and workflow, refer to the accompanying System Design Document. `SDD.md`
