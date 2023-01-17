runtime: nodejs16 # or another supported version

instance_class: F2

inbound_services:
- warmup

automatic_scaling:
  max_idle_instances: 1
  min_idle_instances: 1

handlers:

- url: /stylesheets
  static_dir: stylesheets



- url: /.*
  secure: always
  redirect_http_response_code: 301
  script: auto