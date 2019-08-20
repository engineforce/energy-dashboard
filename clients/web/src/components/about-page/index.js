import React from 'react';
import { Root, P, H1, H2, H3 } from './styled';

const About = () => {
  return (
    <Root>
      <H1>About Me</H1>
      <P>
        Over 10 years of software development experience, specializing in
        JavaScript, Node.js, React.js, AWS Cloud, DevOps Automation, Serverless
        (AWS Lambda), Docker and Kubernetes
      </P>
      <P>
        With strong understanding of SOLID design principles, asynchronous
        messaging, eventual consistency, modularity and TDD, which are the key
        factors for building any robust software systems
      </P>
      <P>Team leading and supervising experience</P>

      <H1>Employment History</H1>
      <H2>
        CAR ADVICE -{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.caradvice.com.au"
        >
          www.caradvice.com.au
        </a>
      </H2>

      <div>
        <H3>Duration: September 2018 – Current</H3>
        <H3>Position: Lead Full Stack Developer</H3>

        <P>
          Set up the Kubernetes cluster in AWS EKS, and deployed its key
          components such as Helm, Dashboard, DNS, Sumo Logic (for monitoring)
          using CloudFormation and JavaScript to fully automated the process.
        </P>
        <P>
          Migrated the search microservice (Node.js) from EC2 to Kubernetes.
        </P>
        <P>
          Enhanced the existing ETL process (which uses AWS Lambda to migrates
          data from MySQL to Elasticsearch) to use AWS Step Functions that
          provide better control of the migration speed and better monitoring.
        </P>
        <P>
          Upgraded the our Elasticsearch from version 2 to version 6, and
          updated/fixed all backend services accordingly.
        </P>
      </div>

      <H2>
        SHROOGAL (Fintech Start-up) -{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://au.linkedin.com/company/shroogal"
        >
          au.linkedin.com/company/shroogal
        </a>
      </H2>

      <div>
        <H3>Duration: August 2017 – September 2018</H3>
        <H3>Position: Full Stack Tech Lead</H3>

        <P>
          Achievements: Developed a loan frontend application (which is a part
          of the Shroogal’s automated financial advice solution) using React.js,
          Next.js (for server-side rendering), Apollo Client (GraphQL).
        </P>
        <P>
          Set up the backend infrastructure in AWS, which is a complete
          serverless micro-service architecture using Cognito, AppSync
          (GraphQL), Lambda, S3 and DynamoDB, etc. with fully automated CI and
          CD using Docker, CloudFormation, Terraform and Bitbucket Pipelines.
        </P>
        <P>
          Migrated Shroogal’s legacy web application from manually deployed AWS
          EC2 to AWS Elastic Beanstalk with Docker, and fully automated its
          deployment using AWS CodePipeline and CodeBuild.
        </P>
      </div>

      <H2>
        IRESS MARKET TECHNOLOGY -{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.iress.com.au"
        >
          www.iress.com.au
        </a>
      </H2>

      <div>
        <H3>Duration: April 2011 – August 2017</H3>
        <H3>Position: Lead Frontend Developer</H3>

        <P>
          Architected and built{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.nabtrade.com.au/viewpoint"
          >
            IRESS ViewPoint
          </a>{' '}
          from scratch, the next generation of financial application/platform
          for IRESS, which is a cloud base application designed to unify
          existing finical markets and wealth management products. It has been
          designed to be highly performed (asynchronous messaging), extendible,
          customizable, themeable, and localizable. It has been developed using
          HTML5, CSS3, WebSocket, WebWorker, Node.js, and React.js.
        </P>
        <P>
          Enhanced IRESS Investor (a complex web-based market information and
          trading application) to have consistent error handling, and support
          public API interfaces.
        </P>
        <P>
          Developed IRESS WebLogin that controls the access to all IRESS web
          products, it provides various features such as products permission
          checking, password encryption using E2EE (end to end encryption),
          customizable themes, user information collection, etc.
        </P>
      </div>
    </Root>
  );
};

export default About;
