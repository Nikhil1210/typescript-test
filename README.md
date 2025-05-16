You • JAVASCRIPT

	1.	What is functional programming? Pure functions, Function currying, Immutability and it's benefits?
		1.	Immutability - We can't modify objects after they are created. How is it good? It looks more of a hassle. (It helps to compare objects by reference instead of comparing each property. Also, it avoids errors by accidently mutating state anywhere in the application)
		2.	Does spread operate creates a deep copy?
		3.	How to update array inside reducer?
	2.	Difference between map, filter and reduce functions.




REACT
	1.	When does react component's re-render?
		1.	If prop of parent changes, does ALL the child components re-render?
		2.	If change in props of parent does not affect props of child, will child component re-render? If yes, how to avoid it?
	2.	How to achieve componentDidMount() in functional components?
	3.	How do we prevent un-necessary re-renders?
		1.	[React.PureComponent]
			1.	Will it do a deep comparison? (No)
			2.	Can I use it for functional component? (No. use React.Memo() or recompose library)
		2.	[React.Memo] Scenario 1- If a react component is passed many props but it's using only few of them and they are not changed but other props are changed, will the react component re-render? (we should use React.Memo() and override comparison function where only required props are compared.
		3.	[React.UseCallback()]
			1.	Are functions inside functional components always re-created upon re-render? How to avoid it? (useCallback)
			2.	What if functions are passed as props? How will comparison function compare functions as props? (Instead have functions inside the component and wrapped it inside useCallback(). This prevents function creation on every re-render.)
		4.	[React.useMemo()] How to avoid expensive computation on every re-render that depends on props? useMemo() with dependency list
	4.	Any design pattern in React for passing current context to all the React components? Like how to pass additional props (like logged-in user's info) to all the React components? We don't want to pass user info at every level. (Wrap all of them inside a HOC or use Context API)
	5.	How to handle forms in REACT? Any challenges?
	6.	What is useEffect? Should we call backend API inside useEffect or redux action?



REDUX- Can't we use a global variable instead of Redux? Redux needs lots of boilerplate code.

Unit testing-
	1.	Which library?
	2.	How to test hooks inside functional components?



