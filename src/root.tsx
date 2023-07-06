import { Suspense } from "solid-js";
import {
  
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";

import "./root.css";
import Home from "./routes";

function App() {
  return (
    <>
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Open+Sans&display=swap" rel="stylesheet"/>
                        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"/>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" rel="stylesheet"/>

        <link href="css/templatemo-topic-listing.css" rel="stylesheet"/>  

      </Head>
      <Body>
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </>
  );
}

function ErrorFallback(error: Error) {
  return (
    <div>
      <h1>Error</h1>
      <p>An error occurred: {error.message}</p>
    </div>
  );
}

function Root() {
  return (
    <Html lang="en">
      <App />
    </Html>
  );
}

export default Root;
