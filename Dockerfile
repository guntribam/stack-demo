FROM goodpractice/npm-docker

COPY ./ /source

WORKDIR /source

RUN npm install -g pm2 && \
    mkdir -p /build && \
    cd /source/app && \
    mv .npmrc_docker .npmrc && \
    mv src/index.live.html /build/index.html && \
    npm install && \
    npm run production && \
    cd /source/api && \
    mv .npmrc_docker .npmrc && \
    npm install && \
    npm run production && \
    mv node_modules /build && \
    mv /source/process.json /build && \
    mv /source/app-runner.sh /build && \
    cd /build && \
    chmod u+x app-runner.sh && \
    rm -rf /source

WORKDIR /build

CMD ["./app-runner.sh"]
