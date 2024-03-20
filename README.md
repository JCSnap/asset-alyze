# Asset Alyze
This is a software that allows you to craft your investment portfolio to reduce unecessary unsystematic risks, based on your expected returns and risk apetite. It allows the use of natural language to modify parameters, backtest etc. It will be worked on during the summer.

## Motivation
This is based on the content taught in [FIN2704](https://nusmods.com/courses/FIN2704/finance). In summary, the course talks about the possibility of creating a portfolio that has zero unsystematic risk through diversification. In other words, it is possible for users to optimize their current portfolio such that they can still get the same expected returns, but with less risk. This software aims to reduce the cost of unecessary unsystematic risk to layman who do not have the know-how and time to create their portfolio through research and mathematical analysis.

## Planned feature
- Natural language to give commands and interact with the interface
- Web scrape historical data and (hopefully) up to date financial data
- Modify parameters such as expected returns, risks
- Tabular and graphical visualization
- Integration with 3rd party apps like TigerTrade (import current assets to visualize)
- Suggest improvements to portfolio

## Example natural language instructions
| Commands                                                                                                                       | Action                                                                                                                                                                                                                                                                                       |
|--------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| I have 10000 dollars, help me create a. portfolio with an expected return of 12%                                               | Select the stocks that the user should buy under the current market price, along with the amount they should be for each stock given the constraints, such that unsystematic risk is minimized. Plot a graph of the returns of the selected stocks, and the portfolio, in the past 5 years.  |
| Limit the stocks to stocks with high market cap                                                                                | Do the same as above, but only selects stocks with market cap > an arbitrary threshold                                                                                                                                                                                                       |
| What does the return look like in the case of a recession?                                                                     | Based on the selected stocks, dig into their historical data in periods of recessions, compute and visualize the expected returns                                                                                                                                                            |
| I am willing to take a 10% chance to lose 50% of my money. Help me craft my portfolio to achieve the highest expected returns. | Based on the constraints given, select stocks in such a way that yields the highest returns, with the least unsystematic risk, and is within the risk contraints.                                                                                                                            |
| Suggest improvements to my current portfolio                                                                                   | Suppose the user is connected to TigerTrade. Compute the expected return of their portfolio, along with their unsystematic risks. Select stocks that when added, result in the same expected return but with less unsystematic risks.                                                        |
| Add a stock to maximize my returns in a timeframe of 1 year.                                                                   | Select the stock accordingly and compute the risks                                                                                                                                                                                                                                           |


## Start
```
npm run dev
```
