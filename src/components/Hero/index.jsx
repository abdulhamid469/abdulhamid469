const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="">
            <figure className="">
              <img src="./imgs/avatar-1.jpg" alt="Abdul Hamid" width={40} height={40} className="img-cover" />
            </figure>
            <div className="">
              <span className="">
                <span className=""></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="">Building Scalable Modern Websites for the Future</h2>
          <div>
            ButtonPrimary
            ButtonOutline
          </div>
        </div>
        <div className="">
          <figure>
            <img src="./imgs/Abdul-Hamid.png" alt="Abdul-Hamid-Frontend-Developer" width={450} height={450} className="" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero;