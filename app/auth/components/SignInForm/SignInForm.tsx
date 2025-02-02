'use client';

import React from 'react';

import { I18nText } from '@/components/common/I18nText';
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
import { useI18n } from '@/utils/contexts';

import { Loading } from '../../../(components)';
import { AuthButtonsContainer } from '../AuthButtonsContainer/AuthButtonsContainer';
import { useSignInForm } from './hooks/useSignInForm';

export const SignInForm = () => {
  const { form, functions, state, error } = useSignInForm();

  const i18n = useI18n();

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          <I18nText path={'auth.signIn.title'} />
        </h1>
        <p className="text-sm text-muted-foreground">
          <I18nText path={'auth.signIn.subTitle'} />
        </p>
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
                      placeholder={i18n.formatMessage({ id: 'auth.signIn.password.placeholder' })}
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
              {state.loading && <Loading />}
              <I18nText path={'auth.signIn.button'} />
            </Button>
          </form>
        </Form>
        <div className="flex justify-center ">
          <Button disabled={state.loading} variant="link" onClick={functions.goToSignUp}>
            <span className="bg-background px-2 text-muted-foreground">
              <I18nText path={'auth.signIn.redirect'} />
            </span>
          </Button>
        </div>

        <AuthButtonsContainer loading={state.loading} />
      </div>
    </div>
  );
};
