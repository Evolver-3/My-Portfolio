import  Container  from "./Container"

const Body = () => {
  return (
    <div className="min-h-screen flex items-start justify-start ">
      <Container className="min-h-[200vh] mt-20 px-15 md:px-45 py-5 md:pt-20 pb-10">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">Hello there</h1>
      <p className="text-secondary text-sm md:text-base">I'm a software who specializes in frontend part of the system</p>
      </Container>
   </div>

  ) 

}

export default Body