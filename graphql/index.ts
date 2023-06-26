export const getUserQuery = `
query Getuser($email:String!){
    user(by: {email: $email}){
        id
        name
        email
        avatarUrl
        description
        githubUrl
        linkedinUrl
    }
}
`;

export const createUserMutation = `
mutation UserCreate($input:UserCreateInput!) {
    userCreate(input: $input) {
        user{
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedinUrl
        }
    }
}
`;
