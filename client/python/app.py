from __future__ import print_function
import grpc

import helloworld_pb2
import helloworld_pb2_grpc

def main():
  channel = grpc.insecure_channel('localhost:50050')
  stub = helloworld_pb2_grpc.GreeterStub(channel)
  
  response = stub.SayHello(helloworld_pb2.HelloRequest(name='you'))
  print("Greeter client received: " + response.message)
  
  response = stub.SayHelloAgain(helloworld_pb2.HelloRequest(name='you'))
  print("Greeter client received: " + response.message)


if __name__ == '__main__':
  main()
