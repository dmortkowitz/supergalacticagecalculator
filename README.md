# Super Galactic Age and Death Calculator.
_by David Mortkowitz_

*Description*
_A program that uses estimated solar years to calculate your age on different planets._

## Age Calculator Specs
_Calculator will use estimated solar years to calculate your local planetary age, based on your current Earth age. All ages are approximate, and use the Math.floor option to round to the most optimistic near integer. Additionally, it should give you an estimate for your time left based on worldwide averages, since local lifestyle will not be reflected on a distant planet. If you have surpassed the expected life expectancy, it should notify you of how many years you are passed expiry date. For example:_
```
| User Age | Planet  | Current Age | Time Remaining | or | Years Surpassed |
|----------|---------|-------------|----------------|----|-----------------|
| David    | Mercury |  138        |  159           |    |  0              |
| David    | Venus   |  54         |  62            |    |  0              |
| David    | Earth   |  33         |  38            |    |  0              |
| David    | Mars    |  18         |  21            |    |  0              |
| David    | Jupiter |  3          |  4             |    |  0              |
```
_These examples are calculated using my real age. If the user were old enough to surpass the expected worldwide average life expectancy of a man (71 years), it would show '0' in the time remaining column, and would begin counting in the Years Surpassed._

## Directions for Installation

* _You can find the Git Repository for this program at:_
*
* _In terminal, please use the command:_
* git clone
### Before starting to use this program, you will need to install all webpacks and dependencies listed in this git directory's package.json file (located here: ), including intializing Karma (in Terminal, navigate to project folder and use the command *karma init*)
* _Once all packages and dependencies are installed, you may navigate to the project folder and use the command:_
* npm run test
* _to run the tests for the business code of this project._


## Technologies used

* Atom
* Javascript (ES6)
* Node.js
* Jasmine
* Karma


## Contact me

_Please contact me at dmortkowitz [at] gmail.com with any questions, critiques, or suggestions._

*Copyright* _David Mortkowitz. 2018._
