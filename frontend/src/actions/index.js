import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const API_URL = 'http://localhost:3001/graphql/'

const client = new ApolloClient({
  uri: API_URL
});

// load data
export const loadPhoneSuccess = (phones) => ({
  type: 'LOAD_PHONE_SUCCESS',
  phones
})

export const loadPhoneFailure = () => ({
  type: 'LOAD_PHONE_FAILURE'
})

export const loadPhone = () => {
  const phonesQuery = gql`
  query {
    phones{
      id
      Name
      Phone
    }
  }`;
  return dispatch => {
    return client.query({
      query: phonesQuery,
    })
    .then((response) => {
      console.log(response)
      dispatch(loadPhoneSuccess(response.data.phones))
    }).catch((err) => {
      console.error(err)
      dispatch(loadPhoneFailure)
    });
  }
}

// post data
export const postPhoneSuccess = (phones) => ({
  type: 'POST_PHONE_SUCCESS',
  phones
})

export const postPhoneFailure = (id) => ({
  type: 'POST_PHONE_FAILURE',
  id
})

const postPhoneRedux = (id, Name, Phone) => ({
  type: 'POST_PHONE',
  id,
  Name,
  Phone
})

export const postPhone = (id, Name, Phone) => {
  const addQuery = gql`
  mutation updatePhone($id: String!, $Name: String!, $Phone: String!) {
    addPhone(id: $id, Name: $Name, Phone: $Phone) {
      id
      Name
      Phone
    }
  }`;
  return dispatch => {
    dispatch(postPhoneRedux(id, Name, Phone))
    return client.mutate({
      mutation: addQuery,
      variables: {
        id,
        Name,
        Phone
      }
    })
    .then((response) => {
      dispatch(postPhoneSuccess(response.data))
    }).catch((err) => {
      console.error(err)
      dispatch(postPhoneFailure(id))
    });
  }
}

// delete phone
const deletePhoneRedux = (id) => ({
  type: 'DELETE_PHONE',
  id
})

export const deletePhoneSuccess = (phones) => ({
  type: 'DELETE_PHONE_SUCCESS',
  phones
})

export const deletePhoneFailure = () => ({
  type: 'DELETE_PHONE_FAILURE'
})

export const deletePhone = (id) => {
  const deleteQuery = gql`
  mutation removePhone($id: String!) {
    removePhone(id: $id) {
      id
    }
  }`;
  return dispatch => {
    dispatch(deletePhoneRedux(id))
    return client.mutate({
      mutation: deleteQuery,
      variables: {
        id
      }
    })
    .then((response) => {
      dispatch(deletePhoneSuccess(response))
    }).catch((err) => {
      console.error(err)
      dispatch(deletePhoneFailure())
    });
  }
}

// resend data
export const resendPhone = (id, Name, Phone) => {
  const addQuery = gql `
  mutation updatePhone($id: String!, $Name: String!, $Phone: String!) {
    addPhone(id: $id, Name: $Name, Phone: $Phone) {
      id
      Name
      Phone
    }
  }`;
  return dispatch => {
    return client.mutate({
        mutation: addQuery,
        variables: {
          id,
          Name,
          Phone
        }
      })
      .then(function (response) {
        dispatch(postPhoneSuccess(response))
      })
      .catch(function (error) {
        console.error(error);
        dispatch(postPhoneFailure(id))
      });
  }
}