import  Container  from "./Container"

const Body = () => {
  return (
     <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:p-10">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">Hello there</h1>
      <p className="text-secondary   text-sm  md:text-base">I'm a software who specializes in frontend part of the system</p>
      </Container>
    </div>
  ) 

}

export default Body