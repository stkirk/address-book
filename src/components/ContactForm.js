import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  addContactAction,
  updateNameAction,
  updateNumberAction,
  updateContactAction,
} from "../actions/contactsActions";

const ContactForm = (props) => {
  return (
    <Card>
      <CardHeader
        title={props.currentContact.isEditing ? "Edit Contact" : "AddContact"}
      />
      <CardContent>
        <TextField
          onChange={(e) => props.updateNameAction(e.target.value)}
          style={{ marginBottom: "10px" }}
          className="text-field"
          variant="outlined"
          label="Name"
          value={props.currentContact.name}
        />
        <TextField
          onChange={(e) => props.updateNumberAction(e.target.value)}
          className="text-field"
          variant="outlined"
          label="Number"
          value={props.currentContact.phoneNumber}
        />
      </CardContent>
      <CardActions className="card-actions">
        {props.currentContact.isEditing ? (
          <Button
            onClick={() =>
              props.updateContactAction(props.currentContact.contactIndex)
            }
            variant="outlined"
            color="primary"
          >
            Save
          </Button>
        ) : (
          <Button
            onClick={() => props.addContactAction()}
            variant="outlined"
            color="primary"
          >
            Add Contact
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    currentContact: state.currentContact,
  };
};

export default connect(mapStateToProps, {
  addContactAction,
  updateNameAction,
  updateNumberAction,
  updateContactAction,
})(ContactForm);
