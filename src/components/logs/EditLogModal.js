import { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const modalStyle = {
  width: "75%",
  height: "75%",
};

const EditLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!message || !tech) {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      console.log(message, tech, attention);

      // Clear Fields
      clearFields();
    }
  };

  const clearFields = () => {
    setMessage("");
    setTech("");
    setAttention(false);
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Edit System Log</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="John Doe">John Doe</option>
              <option value="Sara Brown">Sara Brown</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close blue waves-effect waves-green btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default EditLogModal;
