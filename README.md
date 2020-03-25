### What the app does

  - Pull from 

    https://digitalmakerspace.uncw.edu/api/v1/queue 
    https://digitalmakerspace.uncw.edu/api/v1/image_rotation

  - Frontend endpoints

    http://localhost:3003
    http://localhost:3003/image_rotation

    -or-

    https://print-queue.libapps.uncw.edu
    https://print-queue.libapps.uncw.edu/image_rotation

### How to build a dev box

  ```git clone https://libapps-admin.uncw.edu/randall-dev/3d-print-queue-view
  cd 3d-print-queue-view
  docker-compose up -d```

  - `docker-compose down`  # to stop it

   The "app" folder in this repo holds all the app code.  It is sync'ed inside the container, so any revisions to those files is reflected inside container.  So, you edit the code in this folder on your harddrive, and the files inside the docker container update too.  Sometimes you have to `docker-compose down` then `docker-compose up` to clear the cache.

### How to build a prod image

  - After you get the code like you want it,
  - `docker login libapps-admin.uncw.edu:8000`
  - `docker build -t libapps-admin.uncw.edu:8000/randall-dev/3d-print-queue-view .`
  - `docker push libapps-admin.uncw.edu:8000/randall-dev/3d-print-queue-view`



