import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

export default class Home extends React.Component {
	public render() {
		return (
			<div>
				<Query query={allUsersQuery}>
					{({ loading, error, data }) => {
                                    if(loading) {
                                          return (<p>Loading...</p>);
                                    }
                                    if (error) {
                                          return (<p>Error :(</p>);
                                    }

                                    return data.allUsers.map(({ id, email }: any) => (
                                          <div key={id}>
                                                <h1>{email}</h1>
							</div>
						));
					}}
				</Query>
			</div>
		);
	}
}

const allUsersQuery = gql`
	{
		allUsers {
			id
			email
		}
	}
`;
