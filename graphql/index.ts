export const getUserQuery =`
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
`

export const createUserMutation = `
mutation createUser($input:UserCreateInput!){
    userCreate(input:$input){
        user{
            name
            email
            avatarUrl
            description
            githubUrl
            linkedinUrl
            id
        }
    }
}
`