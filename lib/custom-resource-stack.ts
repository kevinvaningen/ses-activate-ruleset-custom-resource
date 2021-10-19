import {Construct, Stack, StackProps} from "@aws-cdk/core";
import {SesDefaultRuleSetCustomResourceConstruct} from "./ses-default-rule-set-custom-resource-construct";
import {ReceiptRuleSet} from "@aws-cdk/aws-ses";
import * as actions from '@aws-cdk/aws-ses-actions';
import { Bucket } from "@aws-cdk/aws-s3";

export class CustomResourceStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        // THIS EXAMPLE STACK EXPECTS AN VALID SES EMAIL DOMAIN HAS ALREADY BEEN CREATED.

        const emailArchiveBucket = new Bucket(this, 'emailArchiveBucket', {
            bucketName: 'bucket-name-to-be-changed'
        });

        const ruleSet = new ReceiptRuleSet(this, 'ArchivalRuleSet', {
            receiptRuleSetName: 'default',
            rules: [
                {
                    enabled: true,
                    actions: [
                        new actions.S3({
                            bucket: emailArchiveBucket,
                            objectKeyPrefix: 'emails/'
                        })
                    ],
                },
            ]
        });

        new SesDefaultRuleSetCustomResourceConstruct(this, 'cdkCallCustomResourceConstruct', {
            receiptRuleSetName: ruleSet.receiptRuleSetName
        });
    }
}
