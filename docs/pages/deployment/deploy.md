# Deploy

To deploy a release, follow these steps:

1. Navigate to the main page of the repository on Github
1. Under your repository name, click **Actions**.
1. In the left sidebar, click the workflow **Deploy Web**
1. From the list of workflow runs, click the name of the run to see the workflow run summary.
1. You will see a notification for the review request. On the notification, click **Review deployments**.
1. Select the job environment(s) to approve or reject. Optionally, leave a comment.
1. Approve or reject:
    - To approve the job, click **Approve and deploy**. Once a job is approved (and any other environment protection rules have passed), the job will proceed. At this point, the job can access any secrets stored in the environment.
    - To reject the job, click **Reject**. If a job is rejected, the workflow will fail.