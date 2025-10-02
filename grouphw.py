# ============================================
# CSC 111 – Introduction to Computing
# Lab #: Sequences, Selections, Loops
# Student Name: Obinna  Amadi 
# Programming Buddy: Trenton Ashford, Milca 
# Z Number: Z00040959
# Date: 2025-10-01
# Instructor: Prof. Felicity M. Weed Jackson
# File Name: grouphw.py
# ============================================

# Description:
# This program demonstrates sequences, selections, and loops using
# a student grade calculator. It uses variables, if/else statements,
# and for/while loops.

# How it works:
# First, it calculates a student's average grade (sequence).
# Then, it determines the letter grade using conditionals (selection).
# Finally, it prints a pattern and a countdown using loops.

# Reflection:
# [Write YOUR OWN 2-3 sentences about what YOU learned, what was
# challenging for YOU, or what YOU found interesting. This must be
# different from your buddy's reflection.]

# ============================================

# 1. SEQUENCE
print("1. SEQUENCE EXAMPLE")
grades = [82, 90, 88, 98, 92]
total = 0

for grade in grades:
    total += grade

average = total / len(grades)

# 2. SELECTION - Decision making with if/else
print("2. SELECTION EXAMPLE")
if average >= 90:
    grade = "A"
elif average >= 80:
    grade = "B"
elif average >= 70:
    grade = "C"
elif average >= 60:
    grade = "D"
else:
    grade = "F"
print(f"Letter Grade: {grade}\n")


