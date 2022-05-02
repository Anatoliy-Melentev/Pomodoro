import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './store';
import { useMountEffect } from './hooks/useMountEffect';
import { TaskContextProvider } from './shared/context/taskContext';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { Layout } from './shared/Layout';
import { TaskBlock } from './shared/TaskBlock';
import { Container } from './shared/Container';
import { Timer } from './shared/Timer';
import { Statistics } from './shared/Statistics';
import { Preferences } from './shared/Preferences';

import './variables.global.sass';
import './main.global.sass';

function AppComponent() {
  const [mounted, setMounted] = useState(false);
  useMountEffect(() => setMounted(true));

  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
          <Layout>
            <Header />
            <Container>
              <Content>
                <Routes>
                  <Route
                    path="/"
                    element={(
                      <TaskContextProvider>
                        <TaskBlock />
                        <Timer />
                      </TaskContextProvider>
                    )}
                  />
                  <Route path="preferences" element={<Preferences />} />
                  <Route path="statistics" element={<Statistics />} />
                </Routes>
              </Content>
            </Container>
          </Layout>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(AppComponent);
