FROM golang AS builder
WORKDIR /build
COPY . ./
RUN CGO_ENABLED=0 go build -ldflags '-extldflags "-static"' -o main main.go

FROM scratch
COPY --from=builder /build/main /main
ENTRYPOINT ["/main"]
