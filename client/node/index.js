const grpc = require('grpc');

const protoPath = require('path').join(__dirname, '../..', 'proto');
const proto = grpc.load({root: protoPath, file: 'helloworld.proto' });

const client = new proto.helloworld.Greeter('localhost:50050', grpc.credentials.createInsecure());

client.SayHello({
  name: "Aditya"
}, (error, response) => {
  if(error) {
    console.log("Error:", error.message);
  } else {
    console.log(response);
  }
})
