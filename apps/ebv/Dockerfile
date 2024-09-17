FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system ebv && \
    adduser --system -G ebv ebv

COPY dist/apps/ebv ebv/
RUN chown -R ebv:ebv .

RUN npm --prefix ebv --omit=dev -f install

CMD [ "node", "ebv" ]
