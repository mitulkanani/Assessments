import Container from '../components/Container'

const EmptyProduct = () => {
  return (
    <Container>
    <h2 className="text-xl font-medium mb-5">Project List</h2>
    <div className="bg-white border rounded-md flex min-h-[300px] justify-center items-center">
        No Data Found
    </div>
  </Container>
  )
}

export default EmptyProduct
