const grpc = require('grpc');

const proto = grpc.load('../proto/helloworld.proto');
const server = new grpc.Server();

//define the callable methods that correspond to the methods defined in the protofile
server.addProtoService(proto.helloworld.Greeter.service, {
  SayHello(call, callback) {
    const { name } = call.request;
    console.log("name", name);
    callback(null, {
      message: `Hello ${name}`
    })
  },

  SayHelloAgain(call, callback) {
    const { name } = call.request;
    console.log("name again", name);
    callback(null, {
      message: `Hello again ${name}`
    })
  }
});

//Specify the IP and and port to start the grpc Server, no SSL in test environment
server.bind('0.0.0.0:50050', grpc.ServerCredentials.createInsecure());

//Start the server
server.start();
console.log('grpc server running on port:', '0.0.0.0:50050');
