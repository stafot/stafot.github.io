
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  content: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Automating EKS Node Rotation for AMI Releases",
    date: "03 Aug 2021",
    slug: "automating-eks-node-rotation-for-ami-releases",
    excerpt: "How we automated our node rotation process for new AMI releases and built open source tools to eliminate toil.",
    content: `
# Automating EKS Node Rotation for AMI Releases

This article was originally published on the [Mattermost Engineering Blog](https://mattermost.com/blog/automate-eks-node-rotation/).

## The Challenge of Toil

In the world of Site Reliability Engineering, one of our primary goals is to reduce toil - the manual, repetitive work that tends to scale linearly with service growth. Our journey to automate node rotation for AMI releases exemplifies this mission.

## Key Challenges We Faced

1. **Limited Flexibility in Kops**: The sequential node rotation in Kubernetes Operations (kops) wasn't meeting our needs for flexible, environment-specific handling.
2. **EKS Automation Gaps**: AWS EKS clusters lacked automated node rotation capabilities for new AMI releases.

## Our Solution

We developed a comprehensive solution combining existing tools with new implementations:

### Tools and Implementation
- Created a flexible node rotation library (rotator)
- Integrated with our cloud provisioner for kops clusters
- Developed rotatorctl CLI tool for EKS clusters
- Implemented GitLab pipelines for automated AMI releases

### Workflow Improvements
For kops clusters:
- Automated new AMI deployment
- Managed installation traffic during upgrades
- Ensured cluster stability monitoring

For AWS EKS clusters:
- Automated AMI updates in Launch configurations
- Implemented controlled node rotation
- Maintained service availability during updates

## Impact and Benefits

This automation initiative:
- Reduced manual intervention from 2-3 people to automated processes
- Cut down rotation time from 2-8 hours to minimal oversight
- Enabled more frequent security updates
- Improved overall infrastructure reliability

---

This post summary of our detailed engineering blog post. For complete technical details and implementation specifics, please visit the original article https://mattermost.com/blog/automate-eks-node-rotation/
    `
  },
  {
    id: "2",
    title: "SLO Monitoring and Alerting with Prometheus and Sloth",
    date: "26 Oct 2021",
    slug: "slo-monitoring-and-alerting-with-prometheus-and-sloth",
    excerpt: "How we implemented Service Level Objectives (SLOs) at Mattermost using Sloth and Prometheus for better reliability monitoring.",
    content: `
# SLO Monitoring and Alerting with Prometheus and Sloth

This article was originally published on the Mattermost Engineering Blog.

## The Challenge of Reliability

As Site Reliability Engineers, we face the constant challenge of balancing system reliability with feature delivery. At Mattermost, we tackled this challenge by implementing a comprehensive Service Level Objective (SLO) Framework.

## Key Components of Our SLO Implementation

### Tools We Used

- **Sloth**: For standardized SLO generation for Prometheus
- **Prometheus**: Metrics collection and storage
- **Alertmanager**: Alert routing and notification
- **Thanos**: Rule evaluation and long-term storage
- **Grafana**: Visualization and dashboarding

### Implementation Strategy

We started with our most critical application - the Mattermost server, focusing on:

- Availability as our primary SLI
- Error rate monitoring
- Integration with our cloud provisioner
- Automated SLO creation for new workspaces

## Measuring Success

Our initial focus was on availability through error rate monitoring:

- Error Rate = Error Requests / Total Requests

## Future Directions

Our SLO journey continues with plans to:

- Define more service-specific SLIs
- Implement cross-service and cross-cluster SLIs
- Expand the framework to internal services
- Foster a culture of shared responsibility

This post summary of our detailed engineering blog post. For complete technical details and implementation specifics, please visit the original article https://mattermost.com/blog/sloth-for-slo-monitoring-and-alerting-with-prometheus/
    `
  },
  {
    id: "3",
    title: "Mattermost's Cloud Optimization Journey: Pillars of Success",
    date: "15 Apr 2024",
    slug: "mattermost-cloud-optimization-journey-pillars-of-success",
    excerpt: "A deep dive into Mattermost's transformative journey in cloud optimization, exploring strategic initiatives and future strategies.",
    content: `
# Mattermost's Cloud Optimization Journey: Pillars of Success

This article was originally published on the Mattermost Engineering Blog.

## Cloud Optimization: Pillars of Success

At Mattermost, we've embarked on a transformative journey in cloud optimization, marked by strategic initiatives and innovative approaches. Here are the key pillars that have guided our success:

### 1. Systematic Cost Tracking

- Established foundation for cloud expense visibility
- Introduced measurable KPIs like Average Production Workspace Cost
- Built advanced monthly cost tracking reports

### 2. Infrastructure Optimization

- Deployed database proxy for efficient multi-tenancy
- Implemented automated cleanup solutions using AWS Lambda
- Created custom cost alerting tools

### 3. Monitoring and Alerting Evolution

- Transitioned to Grafana for unified cost monitoring
- Integrated AWS StackSets for centralized management
- Developed company-wide cost optimization strategies

### 4. Reserved Instance Management

- Adopted Zesty for automated EC2 RI management
- Implemented strategic RDS Reserved Instance planning
- Established yearly evaluation cycles for database needs

## Future Strategies: Embracing ARM/Graviton

Our forward-looking strategy includes:

- Transitioning databases to ARM/Graviton workloads
- Adapting internal services for ARM64 support
- Migrating DNS servers to ARM64 instances
- Planning for hybrid AMD/ARM architecture support

## Lessons Learned: Spot Instances

Our experience with spot instances taught us valuable lessons about balancing cost savings with operational stability. While the potential for savings was attractive, we found that the unpredictability and management complexity didn't align with our operational objectives.

This post summary of our detailed engineering blog post. For complete technical details and implementation specifics, please visit the original article https://mattermost.com/blog/mattermosts-cloud-optimization-journey/
    `
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Kubernetes Node Local DNS Cache Service",
    slug: "kubernetes-node-local-dns-cache",
    description: "Add node-local-dns headless service.",
    content: `
## Project Overview

This project implements a node-local-dns headless service.

## Problem Statement

While applied NodeLocal DNSCache addon we needed to expose DaemonSet metrics to Prometheus, for this purpose created a headless service and a relevant ServiceMonitor.

## Results

After deploying this solution:
- Ability to unify monitoring for NodeLocal DNSCache addon and coredns.


The project is open source and available for contribution at [GitHub](https://github.com/kubernetes/kubernetes/pull/88412).
    `
  },
  {
    id: "2",
    title: "Ingress NGINX Controller Improvements",
    slug: "ingress-nginx-controller-improvements",
    description: "Unit tests addition to the Kubernetes Ingress NGINX Controller helm chart.",
    content: `

## Project Overview

This project focuses on adding unit tests to the Kubernetes Ingress NGINX Controller helm chart.

## Results

These improvements resulted in:
- Increased unit test coverage.

The changes have been contributed back to the open source project at [GitHub](https://github.com/kubernetes/ingress-nginx/pull/10731).
    `
  },
  {
    id: "3",
    title: "Prometheus Operator Enhancements",
    slug: "prometheus-operator-enhancements",
    description: "Add ability for custom DNSConfig and DNSPolicy.",
    content: `

## Project Overview

This project adds ability for custom DNSConfig and DNSPolicy to the Prometheus Operator.

## Key Features
- Add ability for custom DNSConfig and DNSPolicy


## Results

These improvements enabled:
- More flexible DNS configuration.
- Can help to DNS performance improvements, by ndots configuration.

Documentation and code are available in our Git repository at [GitHub](https://github.com/prometheus-operator/prometheus-operator/pull/3899).
    `
  },
  {
    id: "4",
    title: "Prometheus Community Charts",
    slug: "prometheus-community-charts",
    description: "Adding possibility to set a custom dnsConfig for the pods. Pod's DNS Config field enable users more control on the DNS settings for the pods.",
    content: `
## Project Overview

This project focused on improving the PrometheusCommunity Helm Charts.

## Key Enhancements

- Add ability to set a custom dnsConfig for the pods.
- Pod's DNS Config field enable users more control on the DNS settings for the pods.


The contributions and the reasoning are available at [GitHub](https://github.com/prometheus-community/helm-charts/issues/634).
    `
  }
];
