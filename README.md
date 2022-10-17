# Airport Challenge

``````
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

``````

## Instructions

- Feel free to use google, your notes, books, etc. but work on your own.
- Keep it SIMPLE - it's not nearly as complicated as it first may look.
- You must [submit your challenge](https://airtable.com/shrUGm2T8TYCFAmjN) by the deadline, wherever you get to.
- Use your own test framework and evidence your test-driven development by committing on passing tests.
- Please write your own README detailing how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
- If you refer to the solution of another coach or student, please put a link to that in your README.
- Please create separate files for every class, module, and spec.

## Steps

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Convert stories into a representative domain model and test-drive your work.
4. Run your tests using `npm test` or `node specRunner.js`
5. OPTIONAL: [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src`.

## Task

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off. Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
| object    |     properties              |     messages                  |     output     |
|  airport  | airportPlanes@Array[@string]|Landplane(plane @string)       | @string        |
|           |                             |PlaneID(@string)|@boolean        |

1.Testing that plane is within array by testing length increases
2. String should confirm the arrival of plane at airport

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
| object    |     properties              |     messages                  |     output     |
|  airport  | Capacity@integer            |constructor @integer)          | @void          |

1.Test that the default capacity is set for the airport
2.Test to make sure the capacity is changeable

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
| object    |     properties              |     messages                  |     output     |
|  airport  | airportPlanes@Array[@string]| Airport capacity is full?     | @boolean       |
|           |  capacity @integer          | AirportisFull()               | @boolean       |     
|  plane    |   id@string                 |                               |                |

1. Test that if capacity of airport exceeds capacity, the plane will not be added to the array

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

| object    |     properties              |     messages                  |     output     |
|  airport  | airportPlanes@array[@string]| planeTakeoff@integer)         | @void          |
|  plane    | flightID @string            |                               |                |

1. Test that plane has taken off from Airport by checking the length of the airport has decreased
2. Test that a string returns that the plane has departed from the airport and no longer exists. 

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```
| object    |     properties              |     messages                  |     output     |
|  airport  | airportPlanes@Array[@string]| planeLanded                   | @string        |
|           |                             | planeDeparted                 | @string        |
|           |                             | planeAlreadyExists            | @boolean       |
|  plane    |   ID@string                 |                               |                |

1. Testing that the plane has landed and exists within Airport to return a string
2. Test that departed plane string appears when plane attempts to leave airport.

#### Extended Acceptance Criteria

```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

Your task is to test dive the creation of a set of classes/objects to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.

About the project
Why does this project exist?
This project was a culmination of the ideas taught to my cohort during the first week of our course. i created this project to gain further understanding of domain modelling and testing frameworks.

When did you complete the project?
Unfortunately i wasn't able to complete the project due to some issues i had come across when testing the framework for the 3rd test but i hope to complete this challenge within my own time.

Built with
A list of technologies and dependencies used in this project?
i used github, visualstudio code and repositories i forked from bobs bagels to code.

getting started
How can the viewer set up the project locally?
Using the github page from digital futures academy, fork the repository and create a folder in file explorer to open in visual studio code. Once the repository is cloned using the HTML link, open the terminal and type npm install to retrieve the folders associated with the file and begin to code.

Problem statements
For this challenge we are required to read the user stories detailed in the README file and create domain models to meet user requirements. Once complete create class for the airport to complete 1st test to add plane to the airport and continue from there.

Project review and roadmap
Why does this project exist?
I have learned how to improve my coding using the domain models and testing framework. if i were to tackle this challenge again i would ask questions more directly related to my issues faced.

where could this project go next?
I can improve the testing framework for this project, so that implementing code would be easier using the skills learnt from the new sessions.
