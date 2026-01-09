import { BsChatDots, BsEnvelope, BsTelephone } from "react-icons/bs";
function Info() {
  return (
    <div className="container my-5">
      <div className="row bg-light p-4 align-items-center">
        {/* Left Text */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h2 className="fw-bold" style={{ color: "#154360" }}>
            We're here to help.
          </h2>
          <p className="mb-1">Our expert gemologists are here to help.</p>
          <p>
            We’re available seven days a week to guide you on <br />
            diamonds, gemstones, and jewelry.
          </p>
        </div>

        {/* Right Contact Options */}
        <div className="col-12 col-md-6 d-flex justify-content-around text-center">
          <div>
            <BsChatDots size={28} className="mb-2" />
            <p className="m-0">Chat</p>
          </div>
          <div className="border-start px-4">
            <BsEnvelope size={28} className="mb-2" />
            <p className="m-0">Email</p>
          </div>
          <div className="border-start px-4">
            <BsTelephone size={28} className="mb-2" />
            <p className="m-0">Call</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
