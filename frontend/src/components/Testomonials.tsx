
const Testimonials = () => {
  return (
    <section className="bg-lightGray py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-darkGray mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow-md">
            <p className="text-darkGray mb-4">"Great service, highly recommended!"</p>
            <h4 className="text-gold font-semibold">Client 1</h4>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <p className="text-darkGray mb-4">"Professional and reliable technicians."</p>
            <h4 className="text-gold font-semibold">Client 2</h4>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <p className="text-darkGray mb-4">"Top-notch service from start to finish."</p>
            <h4 className="text-gold font-semibold">Client 3</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
