# AWS Custom Resource Dynamo inserts CDK project

Read my blog: https://kevin-van-ingen.medium.com/cdk-ses-custom-resource-for-activating-a-rule-set-41ec3939eb8

This repo and the blog covers:

* SES receipt rule creation
* SES receipt rule activation through custom resource (look in the lib folder)


## Useful commands

The `cdk.json` file tells the CDK Toolkit how to execute your app.

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
