export interface LoginHeaderProps {
  title: string;
  subtitle: string;
}

export interface LoginFormProps {
  patToken: string;
  onPatTokenChange: (token: string) => void;
  onSignIn: () => void;
  isButtonDisabled: boolean;
}

export interface InfoStepProps {
  stepNumber: number;
  stepText: string;
}

export interface LoginInfoSectionProps {
  title: string;
  steps: Array<{
    number: number;
    text: string;
  }>;
} 