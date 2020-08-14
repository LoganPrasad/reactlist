import React from 'react'

import { Search, Grid, Header, Segment } from 'semantic-ui-react'

function SearchMovies() {
    return (
        <div>
                <Grid>
        <Grid.Column width={6}>
          <Search
            /*loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}*/
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>
             
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>
             
            </pre>
          </Segment>
        </Grid.Column>
      </Grid> 
        </div>
    )
}



export default SearchMovies

