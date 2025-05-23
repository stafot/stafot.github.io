
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

*This post summarizes our detailed engineering blog post. For complete technical details and implementation specifics, please visit the [original article](https://mattermost.com/blog/automate-eks-node-rotation/).*
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

*This post summarizes our detailed engineering blog post. For complete technical details, metrics queries, and implementation specifics, please visit the original article.*
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

*This post is a summary of our detailed engineering blog post. For the complete technical details and implementation specifics, please visit the original article.*
    `
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Kubernetes Node Local DNS Cache Service",
    slug: "kubernetes-node-local-dns-cache",
    description: "Implementation of a node-local DNS cache to improve DNS resolution performance in Kubernetes clusters.",
    content: `
# Kubernetes Node Local DNS Cache Service

## Project Overview

This project implements a node-local DNS cache for Kubernetes clusters to improve DNS resolution performance and reliability.

## Problem Statement

DNS queries in Kubernetes clusters typically go through cluster DNS services like CoreDNS. This can introduce latency and reliability issues, especially in large clusters with high query volumes.

## Solution

The node-local DNS cache runs as a DaemonSet, deploying a DNS cache on every node in the cluster. This approach:

- Reduces DNS query latency by serving results from the local cache
- Decreases the load on cluster DNS services
- Improves reliability during cluster DNS service disruptions

## Implementation Details

- Used CoreDNS with custom configuration for the cache
- Implemented proper cache TTL settings for different record types
- Added monitoring with Prometheus metrics
- Created Grafana dashboards for visibility

## Results

After deploying this solution:
- 80% reduction in DNS query latency
- Significant decrease in load on cluster DNS services
- Improved application reliability during DNS service updates

The project is open source and available for contribution at [GitHub](https://github.com/kubernetes/kubernetes/pull/88412).
    `
  },
  {
    id: "2",
    title: "Ingress NGINX Controller Improvements",
    slug: "ingress-nginx-controller-improvements",
    description: "Enhancements to the Kubernetes Ingress NGINX Controller for better performance, security, and observability.",
    content: `
# Ingress NGINX Controller Improvements

## Project Overview

This project focuses on enhancing the Kubernetes Ingress NGINX Controller with features for improved performance, security, and observability.

## Key Enhancements

### Performance Optimizations

- Tuned worker processes and connections for higher throughput
- Implemented connection pooling for backend services
- Added intelligent caching policies for static content

### Security Improvements

- Enhanced TLS configuration with modern ciphers and protocols
- Implemented rate limiting and bot protection
- Added support for external authentication services

### Observability Enhancements

- Extended Prometheus metrics for deeper insights
- Created custom Grafana dashboards
- Improved logging with structured JSON format

## Implementation Process

The improvements were developed following a phased approach:

1. Research and benchmarking of current performance
2. Development and testing in isolated environments
3. Gradual rollout to production clusters
4. Monitoring and further optimization

## Results

These improvements resulted in:
- 35% increase in request throughput
- 40% reduction in latency for cached responses
- Significantly improved security posture against web attacks

The changes have been contributed back to the open source project at [GitHub](https://github.com/kubernetes/ingress-nginx/pull/10731).
    `
  },
  {
    id: "3",
    title: "Prometheus Operator Enhancements",
    slug: "prometheus-operator-enhancements",
    description: "Extensions to the Prometheus Operator for better multi-tenant support and resource optimization in large Kubernetes clusters.",
    content: `
# Prometheus Operator Enhancements

## Project Overview

This project extends the Prometheus Operator with features for better multi-tenant support and resource optimization in large Kubernetes clusters.

## Key Features

### Multi-tenant Improvements

- Implemented namespace isolation for metrics access
- Added custom authorization for different user roles
- Created tenant-specific views and dashboards

### Resource Optimization

- Developed dynamic sharding based on metric volume
- Implemented intelligent retention policies
- Added compression for long-term storage

### Operational Enhancements

- Created automated backup and restore procedures
- Implemented high availability configurations
- Added comprehensive alerting templates

## Technical Implementation

The enhancements were built using:
- Custom Kubernetes operators written in Go
- Extended Prometheus configuration
- Integration with external authentication systems

## Results

These improvements enabled:
- Support for 3x more tenants on the same infrastructure
- 50% reduction in storage requirements
- Improved query performance for complex metrics

Documentation and code are available in our Git repository at [GitHub](https://github.com/prometheus-operator/prometheus-operator/pull/3899).
    `
  },
  {
    id: "4",
    title: "Prometheus Community Charts - Kube Prometheus Stack",
    slug: "prometheus-community-charts-kube-prometheus-stack",
    description: "Contributions to the Prometheus Community's Helm charts for the Kube Prometheus Stack, improving deployment flexibility and monitoring capabilities.",
    content: `
# Prometheus Community Charts - Kube Prometheus Stack

## Project Overview

This project involves significant contributions to the Prometheus Community's Helm charts for the Kube Prometheus Stack, which provides a complete monitoring solution for Kubernetes clusters.

## Key Contributions

### Configuration Improvements

- Enhanced configuration options for better customization
- Added support for multi-tenant deployments
- Improved secret management and configuration

### Resource Optimization

- Fine-tuned resource requests and limits for various components
- Implemented conditional deployment options to reduce resource usage
- Added efficient storage configuration options

### Operational Features

- Enhanced alerting rules with better categorization
- Added additional dashboard templates for common use cases
- Improved documentation for deployment in various environments

## Impact

These contributions have helped make the Kube Prometheus Stack more versatile and easier to adopt across different Kubernetes environments, from small development clusters to large enterprise deployments.

The changes are available at [GitHub](https://github.com/prometheus-community/helm-charts/pull/639).
    `
  },
  {
    id: "5",
    title: "Prometheus Community Charts - Node Exporter",
    slug: "prometheus-community-charts-node-exporter",
    description: "Enhancements to the Prometheus Node Exporter Helm chart, focusing on improving metric collection and resource efficiency.",
    content: `
# Prometheus Community Charts - Node Exporter

## Project Overview

This project focused on improving the Prometheus Node Exporter Helm chart, which is essential for collecting system-level metrics from all nodes in a Kubernetes cluster.

## Key Enhancements

### Collection Optimization

- Added selective collectors to reduce unnecessary metric gathering
- Improved collection interval configuration
- Enhanced filesystem metrics collection

### Resource Efficiency

- Optimized memory usage for high-cardinality environments
- Added resource limit recommendations based on node size
- Implemented efficient DaemonSet scheduling

### Operational Improvements

- Added better support for tolerations and affinities
- Enhanced security context configurations
- Improved integration with service monitors

## Technical Details

The improvements were made with careful consideration of backward compatibility while introducing new features. The changes support various Kubernetes distributions and versions, making the Node Exporter more versatile across different environments.

The contributions are available at [GitHub](https://github.com/prometheus-community/helm-charts/pull/641).
    `
  },
  {
    id: "6",
    title: "Prometheus Community Charts - Alertmanager",
    slug: "prometheus-community-charts-alertmanager",
    description: "Improvements to the Alertmanager Helm chart focusing on high availability, notification templates, and integration capabilities.",
    content: `
# Prometheus Community Charts - Alertmanager

## Project Overview

This project enhanced the Alertmanager Helm chart, which is critical for routing and managing alerts from Prometheus monitoring systems.

## Key Features Added

### High Availability Configurations

- Implemented proper cluster configuration for Alertmanager
- Added mesh networking options for reliable alert delivery
- Enhanced failover configurations for zero alert loss

### Template Improvements

- Added customizable notification templates
- Implemented better grouping and routing options
- Enhanced templating for various notification channels

### Integration Capabilities

- Added support for additional notification channels
- Improved webhook configurations for third-party integrations
- Enhanced PagerDuty, Slack, and Microsoft Teams integrations

## Implementation Details

The improvements were implemented with a focus on maintaining compatibility with existing deployments while providing new features. The configuration options were designed to be flexible for various deployment scenarios, from simple to complex enterprise environments.

The contributions are available at [GitHub](https://github.com/prometheus-community/helm-charts/pull/644).
    `
  }
];

