"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
  { code: "en", name: "English", flag: "/flags/gb.svg" },
  { code: "fr", name: "Français", flag: "/flags/fr.svg" },
  { code: "ar", name: "العربية", flag: "/flags/sa.svg" },
]

export function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("en")

  const currentLanguage = languages.find((l) => l.code === currentLang)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          {currentLanguage && (
            <img
              src={currentLanguage.flag}
              alt={currentLanguage.name}
              className="rounded-sm"
              style={{ width: "20px", height: "15px" }}
            />
          )}
          <span className="hidden sm:inline">{currentLanguage?.name}</span>
          <span className="sm:hidden">{currentLang.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setCurrentLang(lang.code)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <img
                src={lang.flag}
                alt={lang.name}
                className="rounded-sm"
                style={{ width: "20px", height: "15px" }}
              />
              <span>{lang.name}</span>
            </span>
            {currentLang === lang.code && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
