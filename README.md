# FlowsPokeApi

## Run application locally

- Download .zip file 
- Go to project dir 'FlowsPokeApi'
- Run ng-serve


## Implementation Explanation

- Started off by creating a Pokemon service to integrate PokeAPI using HttpClient with the application which consisted of 2 endpoints.
	 * GetPokemons - Lists names of pokemons retrieved from the API limited to the first 50.
	 * GetPokemonsData - Will retrieve a specifc pokemons according to the one that was chosen.
	
- Used Angular routing when the 'View Details' button is clicked to direct the user to the GetPokemonsData page per ID.

- Initially started working on this project making use of Bootstrap for styling however, made some research and started working with Angular Material later on in the pokemon-details component.

- Made use of pipes and custom pipes.
	 * Titlecase pipe for the name of the pokemons.
	 * Pagination pipe to paginate the list of pokemons at 10 per page.
	 * Custom filter pipe for the search functionality.
	
- Kept styling as neat and simple as can be. Kept in mind seperation of concerns and created direcotries accordingly in order to easily keep track of changes and work that's being done.

- Application responsivness needs work as it was styled using pixels instead of percentages. Also specifc styles were included in the html tags instead of being in the .css files as these were minimal. Will make sure to work 
  on that on future applications.
