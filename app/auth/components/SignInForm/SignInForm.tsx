'use client';

import React from 'react';

import { SpinnerIcon } from '@/components/icons';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
  PasswordInput,
} from '@/components/ui';

import { AuthButtonsContainer } from '../AuthButtonsContainer/AuthButtonsContainer';
import { useSignInForm } from './hooks/useSignInForm';

export const SignInForm = () => {
  const { form, functions, state, error } = useSignInForm();

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Login to your account</h1>
        <p className="text-sm text-muted-foreground">Enter your email and password</p>
      </div>
      <div className="grid gap-2">
        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={event => {
              event.preventDefault();
              functions.onSubmit();
            }}
          >
            <FormField
              render={({ field }) => (
                <FormItem>
                  <Label className="sr-only" htmlFor="email">
                    Email
                  </Label>
                  <FormControl>
                    <Input
                      disabled={state.loading}
                      id="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      placeholder="email@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name="email"
              control={form.control}
            />
            <FormField
              render={({ field }) => (
                <FormItem>
                  <Label className="sr-only" htmlFor="password">
                    Password
                  </Label>
                  <FormControl>
                    <PasswordInput
                      disabled={state.loading}
                      id="password"
                      autoCapitalize="none"
                      autoComplete="password"
                      autoCorrect="off"
                      placeholder="your very secret password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>{error}</FormMessage>
                </FormItem>
              )}
              name="password"
              control={form.control}
            />
            <Button className="w-full" disabled={state.loading} type="submit">
              {state.loading && <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />}
              Sign in
            </Button>
          </form>
        </Form>
        <div className="flex justify-center ">
          <Button disabled={state.loading} variant="link" onClick={functions.goToSignUp}>
            <span className="bg-background px-2 text-muted-foreground">create new account</span>
          </Button>
        </div>

        <AuthButtonsContainer loading={state.loading} />
      </div>
    </div>
  );
};
