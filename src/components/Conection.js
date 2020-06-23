import React from "react";
import { Form, Card, Button } from "semantic-ui-react";
import Navbar2 from "../components/Navbar2"
import FootPro2 from "../components/FootPro2"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <>
        <Navbar2 />
        <div class="blackground">
          <center>
            <Form.Group>
              <Form
                onSubmit={this.submitForm}
                action="https://formspree.io/xyypggzj"
                method="POST"
              >
                <div class="cone">
                  <Card className="widthscar">
                    <div>
                      <h1>Full Name:</h1>
                      <Form.Input
                        size="medium"
                        name="fullname"
                        placeholder="Enter Full Name... "
                      >
                      </Form.Input>
                      <h1>Subject</h1>
                      <Form.Input
                        placeholder="Enter Subject..."
                        size="medium"
                        name="subject"
                      >
                      </Form.Input>
                      <h1>Email:</h1>
                      <Form.Input
                        placeholder="Enter Email..."
                        size="medium"
                        name="email"
                      >
                      </Form.Input>
                      <h1>Message:</h1>
                      <Form.TextArea
                        placeholder="Leave me a message..."
                        size="big"
                        name="message"
                      >
                      </Form.TextArea>
                    </div>
                  </Card>
                </div>
                <br /> <br /><br /> <br />
                <br />
                {status === "SUCCESS" ? <h1 class="cone3" > Message Has been sent thank you!</h1> :
                  <div class="cone2">
                    <Button
                      color="blue inverted"
                      size="massive"
                      type="submit"
                    >
                      Send
            </Button>
                  </div>
                }
                {status === "ERROR" && <h1 class="cone3">Ooops! There was an error!</h1>}
              </Form>
            </Form.Group>
          </center>
          <br /><br /><br /><br /><br /><br /><br />
        </div>
        <FootPro2 />
      </>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}