'use client';

import React from 'react';

import { SpinnerIcon } from '@/components/icons';
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
  PasswordInput,
} from '@/components/ui';

import { AuthButtonsContainer } from '../AuthButtonsContainer/AuthButtonsContainer';
import { useSignUpForm } from './hooks/useSingUpForm';

export const SignUpForm = () => {
  const { form, functions, state } = useSignUpForm();

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to create your account
        </p>
      </div>
      <div className="grid gap-2">
        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={async event => {
              event.preventDefault();
              await functions.onSubmit();
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
                  <Label className="sr-only" htmlFor="name">
                    Name
                  </Label>
                  <FormControl>
                    <Input
                      disabled={state.loading}
                      id="name"
                      autoCapitalize="none"
                      autoComplete="lastName"
                      autoCorrect="off"
                      placeholder="your second amazing name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name="name"
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
                  <FormMessage />
                </FormItem>
              )}
              name="password"
              control={form.control}
            />
            <FormField
              render={({ field }) => (
                <FormItem>
                  <Label className="sr-only" htmlFor="passwordConfirmation">
                    Confirm password
                  </Label>
                  <FormControl>
                    <PasswordInput
                      disabled={state.loading}
                      id="passwordConfirmation"
                      autoCapitalize="none"
                      autoComplete="passwordConfirmation"
                      autoCorrect="off"
                      placeholder="confirm your password dude"
                      {...field}
                    />
                  </FormControl>
                  {state.isPasswordsEqual && !!field.value && (
                    <FormDescription>passwords are equal 🔥</FormDescription>
                  )}
                  {!state.isPasswordsEqual && <FormMessage>confirm your password</FormMessage>}

                  <FormMessage />
                </FormItem>
              )}
              name="passwordConfirmation"
              control={form.control}
            />
            <Button className="w-full" disabled={state.loading}>
              {state.loading && <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />}
              Sign up
            </Button>
          </form>
        </Form>
        <div className="flex justify-center ">
          <Button disabled={state.loading} variant="link" onClick={functions.goToSignIn}>
            <span className="bg-background px-2 text-muted-foreground">have account already</span>
          </Button>
        </div>

        <AuthButtonsContainer loading={state.loading} />
      </div>
    </div>
  );
};
