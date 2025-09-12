<h1 align="center">Vase5</h1>

`main image`

## Description:
**AI For Developers With GitHub Copilot, Cursor AI & ChatGPT** educational Guide. Basic application for fun practice and Vase building. The Expression *One Vase A day will teach you more than spending hours trying to perfectly make one vase.* 

## Technology Stack
- **Frontend/Client:** React.js, HTML5, CSS, framework, etc.
- **API:** Api calls or external sources used
- **Backend/Server:** node.js/express or python alternatives, include databases

<h2 align="center">Video:</h2>

## Screen Shots:
<p align="center">Please reference the screenshot folder for more available images</p>

`selected image 1`

`selected image 2`

`selected image 3`

## Run Code (Environment)

### Front-End Instructions `<examples below>`
- confirm that config is appropriate:
```
> node -v
> npm -v
> git --version
```

- Initial package.json & install dependenies(localhost:3000):
    - Must be `cd`'d into frontend/client for install
    - MUI, `react-router-dom`, redux, formik, etc... (see resources)
```
> npx create-react-app <project name>
> cd <project name>
> npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
> npm install --save react-router-dom
> npm install react-redux @reduxjs/toolkit
> npm install formik yup dotenv react-responsive-carousel
> npm install --save @stripe/react-stripe-js @stripe/stripe-js
```
- Test front-end once pages are generated (ctrl-c to exit):
```
> npm run start
```

### Back-End Helpful Instructions `<examples below>`
- Initial package.json & install dependencies:
    - Must be `cd`'d into backend/server for install
```
> npx create-strapi-app@latest <project name>
> cd <project name>
> npm install --save stripe
```
- Strapi Database generated (ctrl-c to exit):
```
> npm run develop
```
- **Avoid** *npm run start* and use the `npm run develop`. 
- Allow server to restart with each edit (see resources): 
    - **Content-Type Builder**: Item entry
    - **Media Library**: upload photos
    - **Permissions**: Settings > Roles > Public
- When using .env variables remember to [install prior](https://www.npmjs.com/package/dotenv/v/14.0.0)
```
npm install dotenv --save
```
-
    - Create a .env file in the root directory of your project.
    - Import and configure dotenv.
    - Establish a .gitignore [here](https://git-scm.com/docs/gitignore)

- In frontend fetch `item` from backend (*localhost:1337*):
```
const grouping = "items"
const items = await fetch(
`http://localhost:1337/api/${grouping}`
)
```
--------------------------
### Deployment



## Contact:
<!--- You can add in your linkedin, medium, stack overflow, dev.to account, etc. here --->
If you want to contact me you can reach me at <nelson@oakhalo.com>.

Connect with me on <a href="https://www.linkedin.com/in/ayla-nelson/">LinkedIn</a>

Connect with me on <a href="https://github.com/oakHalo">Oakhalo.dev</a>

## Resources:

#### **Developer Tools:**
- **GitHub Copilot** writes, tests, and iterates—using GitHub Actions to run code and deliver ready-to-review pull [requests](https://github.com/features/copilot)
    - **Github Copilot Chat** [specific](https://docs.github.com/en/copilot/how-tos/use-chat/get-started-with-chat) questions about your project or general software questions; set-up [instructions](https://code.visualstudio.com/docs/copilot/setup-simplified). You can also ask Copilot Chat to write code, fix errors, write tests, and document code. Allows inserting code at the position of the cursor. 
    ```
    > github fix
    ```
    - **Copilot Extensions** capabilities using third party tools, services, and [data](https://github.com/marketplace?type=apps&copilot_app=true).
   
- **Cursor** Built to make you extraordinarily productive, [Cursor](https://cursor.com/en) is the best way to code with AI.
    - **Pricing** options are [available](https://cursor.com/pricing)

- **OpenAi** for chatGPT [here](https://openai.com/)
    - **ChatGPT** [here](https://platform.openai.com/docs/overview)
        - Pricing Options for [Platform](https://platform.openai.com/docs/pricing) and [OpenAI](https://openai.com/api/pricing/) including Text Generation [Documentation](https://platform.openai.com/docs/guides/text?api-mode=responses)
    - Large Language Models (LLM) like [LM Studio as a Local LLM API Server](https://lmstudio.ai/docs/app/api) and [Configuring Ollama AI LLM](https://medium.com/@sreskills/configuring-ollama-ai-llm-on-an-ec2-instance-in-aws-12cff0f5d83b), including [models](https://platform.openai.com/docs/models)


- **PostMan** for API Tests [here](https://www.postman.com/)
    - jsonwebtoken / [jwt](https://jwt.io/) for Authentification & install [here](https://www.npmjs.com/package/jsonwebtoken)
    - jwt Debugger [here](https://jwt.io/#debugger-io)
- **React.New** allows for testing new React projects [here](react.new)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs) part of password hasing for user Authentification. 


#### **style:** 
- `frameworks and links associated`

- Filler Text [typographic](https://generator.lorem-ipsum.info/)
    - Lorem Ipsum 
- Google Fonts [here](https://fonts.google.com/)

#### **helpful hint:** 
- `useful hints for future projects to go faster`
- console log testing with `ctr-alt-l` 
- Always Stay Positive & Triple Check Permissions :)
- When using Copilot apps remember to double check: dependencies, files, routing paths. 




<!-- 
### TODO stx: 
Future Structure (stx):
backend
frontend
images
screenShots [contains video link]
troubleShooting [contains issues resolved]


-->
