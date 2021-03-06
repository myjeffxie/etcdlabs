export class Go {
    version: string;

    constructor(
        version: string,
    ) {
        this.version = version;
    }

    getInstallCommand() {
        return `GO_VERSION=${this.version}

sudo rm -f /usr/local/go/bin/go && sudo rm -rf /usr/local/go

GOOGLE_URL=https://storage.googleapis.com/golang
` + 'DOWNLOAD_URL=${GOOGLE_URL}' + `

` + 'sudo curl -s ${DOWNLOAD_URL}/go$GO_VERSION.linux-amd64.tar.gz | sudo tar -v -C /usr/local/ -xz' + `

` + 'if grep -q GOPATH "$(echo ${HOME})/.bashrc"; then ' + `
  echo "bashrc already has GOPATH";
else
  echo "adding GOPATH to bashrc";` + `
  ` + 'echo "export GOPATH=$(echo ${HOME})/go" >> ${HOME}/.bashrc;' + `
  ` + 'PATH_VAR=$PATH":/usr/local/go/bin:$(echo ${HOME})/go/bin";' + `
  ` + 'echo "export PATH=$(echo $PATH_VAR)" >> ${HOME}/.bashrc;' + `
  ` + 'source ${HOME}/.bashrc;' + `
fi

mkdir -p $GOPATH/bin/
go version

`;
    }
}
