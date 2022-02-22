import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Wang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className="h-screen snap-y snap-proximity overflow-y-scroll h-screen">

        <div className="h-screen flex items-center relative snap-start">
          <div className="triangle top-0 absolute"></div>
          <div className="flex flex-wrap justify-center w-full ">
            <div className="m-5 rounded-full overflow-hidden">
              <Image className="" src="/images/headpic3.JPG" height={400} width={400} alt="headshot" />
            </div>
            
            <div className="m-2 flex justify-center flex-col">
              <h1 className="text-8xl text-center md:text-left"> Hello </h1>
              <h2 className="text-4xl text-center md:text-left"> Welcome to the future </h2>
            </div>
          </div>
          <div className="rotate-180 right-0 triangle absolute bottom-0"></div>
        </div>


        <div className="min-h-[100vh] relative snap-start">
          <div className="rotate-90 float-right triangle absolute right-0"></div>
          <div className="px-2 md:px-52">
            <div className="mb-10 pt-10 md:pt-48"> 
              <h4 className="text-center text-4xl mb-4"> Hey! I'm Victor. </h4>
              <p className="text-center text-xl md:text-3xl"> I'm a computer science student currently working as an intern at Repl.it! </p>
              <p className="text-center text-xl md:text-3xl mb-4"> I enjoy messing around with all sorts of cool tech from compilers and AI, to building out awesome looking applications. Feel free to check out my socials or my resume below to see what I can do for you 😊 </p>
              <div className="w-full flex items-center justify-center">
                <div className="mx-5 blue-hue cursor-pointer">
                  <a href="https://www.linkedin.com/in/victor-yuefeng-wang/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image src="/images/linkedin-logo.png" height={50} width={50} alt="linkedin" />
                  </a>
                </div>
                <div className="mx-5 blue-hue cursor-pointer">
                  <a href="https://github.com/vdoubleu"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image src="/images/github-sign.png" height={50} width={50} alt="github" />
                  </a>
                </div>
                <div className="mx-5 blue-hue cursor-pointer">
                  <a href="Victor-Wang.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image src="/images/document.png" height={50} width={50} alt="resume" />
                  </a>
                </div>
              </div>
            </div>  


            <div className="">
              <p className="text-center text-xl md:text-3xl mb-4">
                In my free time, I like to make music, speed cube, watch anime, mountain bike, and mess around with cool tech.
              </p>

              <p className="text-center text-xl md:text-3xl mb-4">
                If you think I'd be a good fit, please reach out! I'm always looking for new opportunities!
              </p>

              <div className="flex justify-center">
                <a href="mailto:victorwang2001@gmail.com" rel="noopener noreferrer" className="rounded-xl  bg-[#4BA3E5] px-5 py-2 text-white text-3xl hover:bg-blue-500"> Contact Me </a>
              </div>
            </div>
          </div>
          <div className="triangle-bottom absolute bottom-0 "></div>
        </div>
      </main>
    </>
  );
}
