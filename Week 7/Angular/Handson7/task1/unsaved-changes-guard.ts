export const unsavedChangesGuard =
(component: any) => {

  if (
    component.enrollForm?.dirty
  ) {

    return window.confirm(
      'You have unsaved changes. Leave?'
    );
  }

  return true;
};