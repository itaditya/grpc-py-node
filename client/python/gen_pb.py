from grpc.tools import protoc

protoc.main(
    (
      '',
      '--proto_path=../../proto',
      '--python_out=.',
      '--grpc_python_out=.',
      '../../proto/helloworld.proto'
    )
)

# python -m grpc_tools.protoc -I ../../proto --python_out=. --grpc_python_out=. ../../proto/helloworld.proto
