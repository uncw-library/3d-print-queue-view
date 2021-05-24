### What the app does

This app has two pages ('/' and '/image_rotation').  The '/' page lists the current 3D Print jobs, with the job's Title, submitter's First Name, and job Status.  The '/image_rotation' page displays a carousel of 3d printed images.

  - Pulls json from

    https://digitalmakerspace.uncw.edu/api/v1/queue 
    https://digitalmakerspace.uncw.edu/api/v1/image_rotation

  - Lives at

    https://print-queue.libapps.uncw.edu

Within the ./app folder is an Express app.  It uses axios to pull json from digitalmakerspace API app.  It uses morgan to pipe logs to stdout.  If env == development, it sends the error stack to the browser.  It uses handlebar templates.  And serve-favicon to serve favicon (good naming!).  It uses jest and supertest for tests.

### How to build a prod image

  - After you get the code like you want it,

  ```
  docker login libapps-admin.uncw.edu:8000
  docker build --no-cache -t libapps-admin.uncw.edu:8000/randall-dev/3d-print-queue-view .
  docker push libapps-admin.uncw.edu:8000/randall-dev/3d-print-queue-view
  ```

### How to build a dev box

  ```
  git clone https://libapps-admin.uncw.edu/randall-dev/3d-print-queue-view
  cd 3d-print-queue-view
  docker-compose up -d
  ```

  See the app at localhost:3000

  - `docker-compose down`  # to stop it

To add a new package, run `npm install {{whatever}}` on your local computer to add that requirement to package.json.  Running `docker-compose down` `docker-compose up --build -d` will rebuild the container with the new package.json requirement.

The ./app folder on your local computer is mounted inside the container, so any revisions to those files is reflected inside container.

Test your changes, with `docker exec {{name of container}} npm run test` or `npm run test`

Push any code changes to gitlab.
