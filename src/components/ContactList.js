import { Button, Card, CardContent, CardHeader } from "@material-ui/core";
import { connect } from "react-redux";
import {
  deleteContactAction,
  editContactAction,
} from "../actions/contactsActions";

const ContactList = (props) => {
  return (
    <Card>
      <CardHeader title="Your Contacts" />
      <CardContent>
        {props.contacts.map((contact, index) => {
          return (
            <Card className="contact-card" key={index}>
              <CardContent>
                <div className="contact-div">
                  <h4>{contact.name}</h4>
                  <div className="contact-phone-number">
                    {contact.phoneNumber}
                  </div>
                  <div className="contact-actions">
                    <Button
                      style={{ marginRight: "10px" }}
                      onClick={() => props.editContactAction(index)}
                      variant="outlined"
                      color="primary"
                    >
                      Edit
                    </Button>

                    <Button
                      onClick={() => props.deleteContactAction(index)}
                      variant="outlined"
                      color="secondary"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps, {
  deleteContactAction,
  editContactAction,
})(ContactList);
